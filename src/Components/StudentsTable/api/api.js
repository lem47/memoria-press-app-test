const API_URL = (
  'https://test-task-j.herokuapp.com/data?page=1&size=10'
);

export const getPeople = async() => {
  const responce = await fetch(API_URL);

  return responce.json();
};
