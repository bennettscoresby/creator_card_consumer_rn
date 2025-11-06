import { AuthContext } from '@/Providers/AuthProvider';
import { marqetaService } from '@/helpers/marqeta-service';
import { CardListResponse } from '@/marqeta-sdk';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';

/**
 * Custom hook to fetch all user cards using TanStack Query
 * 
 * Features:
 * - Automatic caching (cards are cached for 5 minutes)
 * - Automatic refetching when needed
 * - Only fetches when user is authenticated
 * - Built-in loading and error states
 * 
 * @returns Query result with cards data, loading state, and error state
 */
export function useCards() {
  const { isAuthenticated, session } = useContext(AuthContext);
  const marqetaToken = session?.identity?.traits?.marqeta_token;

  return useQuery<CardListResponse, Error>({
    queryKey: ['cards', marqetaToken],
    queryFn: async () => {
      if (!marqetaToken) {
        throw new Error('No Marqeta token available');
      }
      return await marqetaService.getUserCards(marqetaToken);
    },
    enabled: isAuthenticated && !!marqetaToken,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    cacheTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
    refetchOnWindowFocus: false, // Don't refetch when window gains focus
    refetchOnMount: false, // Don't refetch on component mount if data exists
    refetchOnReconnect: false, // Don't refetch on network reconnect
  });
}

