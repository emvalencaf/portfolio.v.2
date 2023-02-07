import { Meta, Story } from '@storybook/react/types-6-0';
import AcademicCertificate, { AcademicCertificateProps } from '.';
import mock from './mock';

export default {
	title: 'AcademicCertificate',
	component: AcademicCertificate,
	args: mock,
} as Meta<AcademicCertificateProps>;

export const Template: Story<AcademicCertificateProps> = (args) => {
	return (
		<div>
			<AcademicCertificate {...args} />
		</div>
	);
};
