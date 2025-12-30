import { response } from "../../pages/api/response";

export const getRoutes = (obj: any = response, basePath = ""): any[] => {
  const routes: any[] = [];

  Object.entries(obj).forEach(([key, value]: [string, any]) => {
    const currentPath = basePath ? `${basePath}/${key}` : `/${key}`;

    if (value && typeof value === "object") {
      // If it has an element, add it as a route
      if (value.element) {
        routes.push({ path: currentPath, element: value.element });
      }

      // Recursively check for nested objects (excluding 'data' and 'element')
      const nestedRoutes = getRoutes(value, currentPath);
      routes.push(...nestedRoutes);
    }
  });

  return routes;
};
