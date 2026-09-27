export function buildPlaceInfoContent(place: {
  name: string;
  address?: string;
  directionsUrl: string;
}): HTMLElement {
  const root = document.createElement("div");
  root.style.maxWidth = "220px";
  root.style.fontFamily = "sans-serif";

  const title = document.createElement("strong");
  title.textContent = place.name;
  root.appendChild(title);

  if (place.address) {
    const address = document.createElement("p");
    address.style.margin = "4px 0 0";
    address.style.fontSize = "13px";
    address.textContent = place.address;
    root.appendChild(address);
  }

  const linkWrap = document.createElement("p");
  linkWrap.style.margin = "8px 0 0";
  const link = document.createElement("a");
  link.href = place.directionsUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Directions";
  linkWrap.appendChild(link);
  root.appendChild(linkWrap);

  return root;
}

export function buildCommunityInfoContent(label: string, subtitle: string): HTMLElement {
  const root = document.createElement("div");
  root.style.maxWidth = "240px";
  root.style.fontFamily = "sans-serif";

  const title = document.createElement("strong");
  title.textContent = label;
  root.appendChild(title);

  const sub = document.createElement("p");
  sub.style.margin = "4px 0 0";
  sub.style.fontSize = "13px";
  sub.textContent = subtitle;
  root.appendChild(sub);

  return root;
}
