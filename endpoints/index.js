export const getSliders = async (marca) => {
    return await fetch(`${process.env.slidersURL}`, {
        method: 'GET',
        headers: {
          // eslint-disable-next-line prettier/prettier
            'blog-url': marca,
        },
      }).then(response => response.json());
}

export const getVersions = async (marca) => {
    return await fetch(`${process.env.versionsURL}`, {
        method: 'GET',
        headers: {
          // eslint-disable-next-line prettier/prettier
            'blog-url': marca,
        },
      }).then(response => response.json());
}