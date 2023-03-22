import { CustomValidator } from 'sanity';
import type { Content, ContentBlock, BlockSpan } from './types';

type BLV = (minLength: number, maxLength: number) => CustomValidator<Content | undefined>;

export const blockLengthValidator: BLV = (minLength, maxLength) => (blocks) => {
	const totalChars = (blocks || []).reduce((runningTotal: number, block: ContentBlock) => {
		const chars = block.children.reduce((total: number, span: BlockSpan) => total + span.text.length, 0);
		return runningTotal + chars;
	}, 0);

	if (totalChars < minLength) {
		return { message: `A description of at least ${minLength} characters is required` };
	}
	if (totalChars > maxLength) {
		return { message: `Description is getting too long. Please edit to be more consice.` };
	}
	return true;
};
