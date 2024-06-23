import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  //check online/offline
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //boolean
  return onlineStatus;
};

export default useOnlineStatus;
