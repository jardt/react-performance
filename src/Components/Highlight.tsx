import '@catppuccin/highlightjs/css/catppuccin-frappe.css';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { cn } from '../utils';

export const Highlight = ({
    code,
    style,
    lineNumberStyle,
}: {
    code: string;
    style?: string;
    lineNumberStyle?: (num: number) => React.CSSProperties | undefined;
}) => {
    return (
        <div className={cn('w-min pl-6 text-center text-sm', style)}>
            <SyntaxHighlighter
                lineNumberStyle={lineNumberStyle}
                showLineNumbers
                language="tsx"
                style={tomorrow}
                useInlineStyles={true}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};
