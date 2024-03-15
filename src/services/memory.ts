const client = new Map();

export const getViewsBySlug = async (slug: string) => {
  if (slug) {
    const prevValue = client.get(slug);
    let newValue = 1;
    if (prevValue) {
      newValue = Number.parseInt(`${prevValue}`) + 1;
      client.set(slug, newValue);
    } else {
      client.set(slug, 1);
    }
    return newValue;
  }
  return 0;
};

export const getViews = async () => {
  client.set("Creating a sharedroot group in OSX", 350);
  client.set("Configuring Neovim", 200);
  return [...client.entries()];
};
