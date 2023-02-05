// components
import HtmlComponent from "../HtmlComponent";
import ProfilePhoto from "../ProfilePhoto";

// styles
import * as Styled from "./styles";

// types
export type BiosProps = {
	bios: string;
	profilePhoto?: {
		srcImg: string;
		altText: string;
	};
};

const Bios = ({ bios, profilePhoto }: BiosProps) => {
	return (
		<Styled.Wrapper>
			<HtmlComponent html={bios} />
			{profilePhoto && (
				<Styled.ProfilePhotoContainer>
					<ProfilePhoto {...profilePhoto} />
				</Styled.ProfilePhotoContainer>
			)}
		</Styled.Wrapper>
	);
};

export default Bios;
