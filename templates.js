function validateName(name) {
  if (/[^a-zA-Z\s'-]/.test(name)) {
    return "";
  }

  const cleanedName = name.replace(/[^a-zA-Z\s'-]/g, "");
  return cleanedName.charAt(0).toUpperCase() + cleanedName.slice(1);
}

export const pageTemplate = (pageName) => {
  const name = validateName(pageName);

  return `export default function ${name}Page() {
  return <h1>Welcome to ${name}page!</h1>;
}`;
};

export const layoutTemplate = (layoutName) => {
  const name = validateName(layoutName);

  return `export default function ${name}Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}`;
};

export const loadingTemplate = (loadingName) => {
  const name = validateName(loadingName);
  return `export default function ${name}Loading() {
  // Or a custom loading skeleton component
  return <p>Loading...</p>
}`;
};

export const errorTemplate = () => {
  return `"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}`;
};

export const globalErrorsTemplate = () => {
  return `"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}`;
};

export const notFoundTemplate = () => {
  return `import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
`;
};

export const templateFile = (templateName) => {
  const name = validateName(templateName);
  return `export default function ${name}Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
`;
};

export const middlewareTemplate = () => {
  return `import { NextRequest } from "next/server";

// This function can be marked async if using await inside
export function middleware(request: NextRequest) {
  // Middleware logic goes here
}

export const config = {
  matcher: "",
};`;
};

export const routeTemplate = () => {
  return `export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}
`;
};

export const defaultFileTemplate = () => {
  return `export default function Default() {}`;
};
