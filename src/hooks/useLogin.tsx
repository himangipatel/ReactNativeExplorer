import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { saveEmailPassword } from "../redux/slices/authSlice";

const useLogin = () => {
    const dispatch = useDispatch<AppDispatch>();

  const adduser = (email: string, password: string) => {
    dispatch(saveEmailPassword({
        user: {email: email, password: password},
      }));
  };

  return {adduser}
};


export default useLogin