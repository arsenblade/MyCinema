import { NextPageAuth } from "@/shared/types/auth.types"
import { NextPage } from "next"

const ProfilePage: NextPageAuth = () => {
  return (
    <div>profile</div>
  )
}

ProfilePage.isOnlyUser = true;

export default ProfilePage