import { BellIcon } from "lucide-react";

const NoNotificationsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="size-20 rounded-full bg-base-300 flex items-center justify-center mb-5 animate-pulse">
        <BellIcon className="size-10 text-base-content opacity-50" />
      </div>
      <h3 className="text-xl font-semibold mb-2">No notifications yet</h3>
      <p className="text-base-content opacity-70 max-w-md">
        When you receive friend requests or messages, they'll appear here.
      </p>
    </div>
  );
};

export default NoNotificationsFound;
