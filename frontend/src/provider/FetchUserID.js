import queryString from 'query-string'
import swal from 'sweetalert2'
function fetchUserID () {
	const parseValue = queryString.parse(window.location.search);
	if ('userID' in parseValue) {
		return parseValue.userID;
	}
	else {
		swal('Oops...', 'Something went wrong!', 'error');
	}

}

export default fetchUserID;