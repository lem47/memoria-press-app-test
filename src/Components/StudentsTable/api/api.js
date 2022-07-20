export const getStudents = async(page, size) => {
  const responce = await
  fetch(`https://test-task-j.herokuapp.com/data?page=${page}&size=${size}`);

  return responce.json();
};
