export const pathsPublic: { [k: string]: string } = {
  home: "/",
  ProductDetails: "/product/:idOrSlug",
};

export const pathsPrivate: { [k: string]: string } = {
  accountSettings: "/account-settings",
};

export const paths = Object.assign({}, pathsPublic, pathsPrivate);

export const checkPathName = (
  Pathname: string,
  paths: { [k: string]: string }
) => {
  return Object.values(paths).some((path: string) => {
    return path === Pathname;
  });
};
