class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  };
};

const STATUSES = {
  success: '200',
  clientError: '404'
};

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == STATUSES.success) {
    return response.json();
  } else {
    throw new HttpError(response);
  };
};

async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt("Login?", "iliakan");
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Full name: ${user.name}`);
      return user;
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == STATUSES.clientError) {
        alert("We can't find such user.");
      } else {
        throw err;
      };
    };
  };
};

demoGithubUser();