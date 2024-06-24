import { useQuery } from '@tanstack/react-query'
import axiosApiInstance from './axiosApiInstance'

export default function useMovies() {
  return useQuery({
    queryKey: ['movies'],
    queryFn: () => axiosApiInstance.get().then(res => res.data)
  })
}