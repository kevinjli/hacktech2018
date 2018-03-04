import queryString from 'query-string';
import swal from 'sweetalert2';

function fetchUserID () {
	const parseValue = queryString.parse(window.location.search);
	if ('userID' in parseValue) {
		return parseValue.userID;
	}
	else {
		swal('Oops...', 'Something went wrong! Please try again later.', 'error');
		console.log('error handling')
    throw Error();
	}
}

function fetchRelativeURL(url) {
  try {
    return `${url}?userID=${fetchUserID()}`;
  }
  catch (error) {
    return '';
  }
}

export {fetchUserID, fetchRelativeURL};