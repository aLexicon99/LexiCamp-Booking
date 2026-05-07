export function sortCampsByPrice(campsites, sortByPrice) {
  const sortedCampingsites = [...campsites].sort(
    (a, b) => (sortByPrice ? -1 : 1) * (a.pricePerNight - b.pricePerNight),
  );
  return sortedCampingsites;
}

export function sortCampsByRating(campsites, sortByRating) {
  return [...campsites].sort(
    (a, b) => (sortByRating ? -1 : 1) * (a.rating - b.rating),
  );
}

export function filterBySearchName(list, searchTerm) {
  const filterResult = list.filter((campsite) => {
    const name = campsite.name || "";
    const city = campsite.city || "";

    return (
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return filterResult;
}
