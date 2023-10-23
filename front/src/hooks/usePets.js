import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPets } from "../redux/slices/pets";

export default function usePets() {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets.list);
  const loading = useSelector((state) => state.pets.loading);
  const error = useSelector((state) => state.pets.error);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return { pets, loading, error };
}
