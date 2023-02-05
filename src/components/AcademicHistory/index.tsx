// hooks
import { useState } from 'react';

// components
import AcademicCertificate, { AcademicCertificateProps } from '../AcademicCertificate';

// styles
import * as Styled from './styles';

// types
export type AcademicHistoryProps = {
	academicData?: AcademicCertificateProps[];
};

const AcademicHistory = ({ academicData = [] }: AcademicHistoryProps) => {

	academicData.sort((a, b) => Number(a.startIn) - Number(b.startIn));
	// states
	const [stateAcademicData, setStateAcademicData] = useState(academicData);

	return (
		<Styled.Wrapper>
			<ul>
				{stateAcademicData.length >= 1 && stateAcademicData.map((certificate) => (
					<li>
						<AcademicCertificate {...certificate} onClick={() => {
							setStateAcademicData((previousState) => previousState.map((state) => {
								if (state === certificate) return {
									...state,
									showDetails: !state.showDetails,
								}

								return {
									...state,
									showDetails: false,
								}
							}))
						}} />
					</li>
				))}
			</ul>
		</Styled.Wrapper>
	);
};

export default AcademicHistory;
