"use client";

import Loading from "@/components/Loading";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import CampsiteComponent from "../_components/CampsiteComponent";

export default function Location() {
  const [campingsite, setCampingsite] = useState({});
  const [message, setMessage] = useState("");

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    async function fetchLocationData() {
      try {
        const response = await fetch(`/api/campsites/${id}`, {
          cache: "no-cache",
        });
        const data = await response.json();

        if (data.message) setMessage(data.message);
        else setCampingsite(data);
      } catch (error) {
        console.warn(`[API-FEL][campsites/:id=${id}]`, error);
      }
    }

    if (id) fetchLocationData();
  }, [id]);

  return (
    <div className="p-2">
      {!campingsite.name ? (
        <Loading message={message} />
      ) : (
        <CampsiteComponent campingsite={campingsite} />
      )}
    </div>
  );
}
