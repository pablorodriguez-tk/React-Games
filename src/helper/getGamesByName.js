const getGamesByName = (search = '', gameList) => {
  if (search === '') {
    return [];
  }

  search = search.toLocaleLowerCase();
  return gameList.filter((game) =>
    game.title.toLocaleLowerCase().includes(search)
  );
};

export default getGamesByName;
