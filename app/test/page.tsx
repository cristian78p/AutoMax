"use client";

import { db } from "@/Lib/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function TestFirestore() {
  const [cars, setCars] = useState<Array<{ id: string; [key: string]: any }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        setError(null);
        const querySnapshot = await getDocs(collection(db, "cars"));
        console.log("Firestore: fetched docs count:", querySnapshot.size);
        const carList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCars(carList);
      } catch (err: any) {
        console.error("Error fetching cars from Firestore:", err);
        setError(err?.message ?? String(err));
        setCars([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Carros en Firestore</h1>

      {loading && <p className="mt-4">Cargando carros...</p>}

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
          <strong>Error:</strong> {error}
        </div>
      )}

      {!loading && !error && cars.length === 0 && (
        <p className="mt-4">No se encontraron carros. Verifica el nombre de la colección y las reglas de seguridad de Firestore.</p>
      )}

      <ul className="mt-4 space-y-2">
        {cars.map((car) => (
          <li key={car.id} className="p-4 bg-gray-100 rounded-xl shadow-sm">
            {car.name ?? "(sin nombre)"} - {car.branch ?? "(sin marca)"} - {car.price ?? "(sin modelo)"}
          </li>
        ))}
      </ul>
    </div>
  );
}