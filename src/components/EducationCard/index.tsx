// component
import Heading from '../Heading';
import Button from '../Button';

// styles
import * as Styled from './styles';
import DateStringFormating from '../../utils/dateString';

// types
export type AcademicCertificateProps = {
	courseTitle: string;
	courseWork: string | number;
	institution: string;
	startIn: number | string;
	endIn?: number | string;
	urlDownload: string;
	showDetails?: boolean;
	onClick?: () => void;
};

const AcademicCertificate = ({
	courseTitle,
	courseWork,
	institution,
	startIn,
	endIn = "",
	urlDownload,
	showDetails = false,
	onClick,
}: AcademicCertificateProps) => {
	const handleClickDownloadButton = () => {
		window.open(urlDownload);
	}

	const handleClick = () => {
		if (onClick) onClick();
	}

	return (
		<Styled.Wrapper showDetails={showDetails} onClick={handleClick}>
			<Styled.HeaderAcademicCertificate>
				<Heading as="h3" size="medium">
					{DateStringFormating.getFullYear(startIn)} - {courseTitle}
				</Heading>
				{!endIn && (
					<span>
						Cursando
					</span>
				)}
			</Styled.HeaderAcademicCertificate>
			{showDetails &&
				<Styled.BodyAcademicCertificate>
					<Heading as="h4" size="small">
						{institution}
					</Heading>
					<span>
						{courseWork}
					</span>
					{!!endIn &&
						<Button
							type="submit"
							onClick={handleClickDownloadButton
							} >Veja o certificado</Button>
					}
				</Styled.BodyAcademicCertificate>
			}
		</Styled.Wrapper>
	);
};

export default AcademicCertificate;
