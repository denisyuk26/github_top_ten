import {
  FETCH_USERSLIST_SUCCESFUL,
  GET_FULL_USER_SUCCES,
  FETCH_USERLIST_ERROR
} from "../types";

const options = {
  method: "GET",
  policy: "Access-Control-Allow-Origin",
  Accept:
    "application/vnd.github.v3.full+json" ||
    "application/vnd.github.v3.text-match+json",
  cors: "no-cors",
  Authorization: "token f35d1f75fddbd0884f10f14223d6d29628727aaf"
};



export const getUsersList = () => async dispatch => {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=location:Kyiv&sort=followers&order=desc&per_page=10`,
      options
    );
    const UsersList = await response.json();
    let arr = [];
    UsersList.items.map(async i => {
      try {
        const UserUrl = await fetch(i.url, options);
        const ReposUrl = await fetch(`${i.repos_url}?per_page=100`, options);
        const urlData = await UserUrl.json();
        const starsData = await ReposUrl.json();
        let GetAndaddStarsCount = starsData
          .map(i => i.stargazers_count)
          .reduce((a, b) => a + b);
        arr.push({
          data: urlData,
          stars: GetAndaddStarsCount
        });
        return dispatch({
          type: GET_FULL_USER_SUCCES,
          payload: [...arr]
        });
      } catch (error) {
        return dispatch({
          type: FETCH_USERLIST_ERROR,
        });
      }
    });

  } catch (error) {
    return error
  }
};
