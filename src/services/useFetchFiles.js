import { useEffect, useState } from "react"
import { useStateValue } from "../store";
import { constants } from "../store/reducer";

const useFetchFiles = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [{data}, dispatch] = useStateValue();

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://api.npoint.io/dee51ea017d20efdfcc8');
      const body = await res.json();
      dispatch({
        type: constants.UPDATE_FILE_LIST,
        data: body
      });
    }
    catch (err) {
      setError('Error fetching file');
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [loading, error, data];
}

export default useFetchFiles;