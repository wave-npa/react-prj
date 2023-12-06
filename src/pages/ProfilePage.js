import Backdrop from "../components/Backdrop";
import Message from "../components/Message";
import Modal from "../components/Modal";

function ProfilePage() {
  return (
    <div>
      <Message title="Title 1" name="Author 1" text="This is a message" />
      <Message title="Title 2" name="Author 2" text="This is also a message" />
    </div>
  );
}

export default ProfilePage;
