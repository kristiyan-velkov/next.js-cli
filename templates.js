function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export const pageTemplate = (pageName) => {
  return `export default function ${capitalize(pageName)}Page() {
  return <h1>Welcome to ${capitalize(pageName)} page!</h1>;
}`;
};

export const layoutTemplate = (layoutName) => {
  return `export default function ${capitalize(layoutName)}Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}`;
};

export const loadingTemplate = () => {
  return `export default function Loading() {
  // Or a custom loading skeleton component
  return <p>Loading...</p>
}`;
};
