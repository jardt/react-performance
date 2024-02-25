import { ReactNode } from 'react';
import { cn } from '../utils';
import { Highlight } from './Highlight';

export function CodeComponent({
    code,
    color,
    name,
    component,
}: {
    code: string;
    color: string;
    name: string;
    component?: ReactNode;
}) {
    return (
        <div
            className={cn(
                'align-center solid flex w-max flex-col items-center justify-center border bg-base text-blue',
                color,
            )}
        >
            <Highlight code={code}></Highlight>
            {component}
        </div>
    );
}
