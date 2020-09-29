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


export const accessQuotations = async () => {
  let data={
        grant_type: "password",
        username: "integracion@derco.pe",
        password: "Derc02o2o#.",
        client_id: "3",
        client_secret: "0mxJypO83Y6NzjCtjr4MZaibAfg4QwcGM6ZEOvCM",
        scope: ""
  }
  return await fetch(`${process.env.versionsURL}`, {
      method: 'POST',
      headers: {
        // eslint-disable-next-line prettier/prettier
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
}

export const getSucursales = async (marca) => {
  return await fetch(`${process.env.sucursales}`, {
    method: 'GET',
    headers: {
      // eslint-disable-next-line prettier/prettier
        'blog-url': marca,
    },
  }).then(response => response.json());
}