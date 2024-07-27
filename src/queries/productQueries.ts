import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

export function useGetProductById(id: string | undefined) {
  return useSuspenseQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const data = await fetch(
        import.meta.env.VITE_APP_API_BASE_URL + `products/${id}`
      );
      if (!data.ok) {
        throw new Error(`Product not found: ${data.status}`);
      }
      return await data.json();
    },
  });
}

export function useGetProducts(category: string | undefined) {
  return useSuspenseQuery({
    queryKey: ["products", category],
    queryFn: async () => {
      const data = await fetch(
        import.meta.env.VITE_APP_API_BASE_URL + "products"
      );
      if (!data.ok) {
        throw new Error(`Product not found: ${data.status}`);
      }
      return await data.json();
    },
  });
}
