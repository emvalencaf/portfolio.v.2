// styles
import * as Styled from "./styles";

// types
export type ProfilePhotoProps = {
	srcImg: string;
	altText: string;
};

const ProfilePhoto = ({ srcImg, altText }: ProfilePhotoProps) => {
	return (
		<Styled.Picture>
			<img src={srcImg} alt={altText} />
		</Styled.Picture>
	);
};

export default ProfilePhoto;
