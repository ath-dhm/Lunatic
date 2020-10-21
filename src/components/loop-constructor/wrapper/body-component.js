import React from 'react';
import * as lunatic from '../../components';
import * as U from '../../../utils/lib';
import { interpret } from '../../../utils/to-expose';
import { buildChildComponents } from './build-components';

const BodyComponent = ({
	componentType,
	mainId,
	headers,
	components,
	bindings,
	width,
	preferences,
	positioning,
	management,
	features,
	setTodo,
}) => {
	if (componentType === 'RosterForLoop') {
		const uiComponents = buildChildComponents(headers)(components);
		return (
			<table id={`table-${mainId}`} className="table-lunatic">
				<tbody>
					{uiComponents.map((row, i) => (
						<tr key={`table-${mainId}-row${i}`}>
							{row.map((component, j) => {
								const {
									label,
									headerCell,
									colspan,
									rowspan,
									componentType,
									id,
									rowNumber,
									...componentProps
								} = component;
								const localBindings = U.buildBindingsForDeeperComponents(
									rowNumber
								)(bindings);
								if (componentType) {
									const Component = lunatic[componentType];
									return (
										<td
											key={`table-${mainId}-row-${i}-cell-${j}`}
											style={{ width }}
										>
											<Component
												{...componentProps}
												id={`${id}-row-${i}`}
												label={label}
												handleChange={(up) => {
													setTodo({ up, rowNumber });
												}}
												preferences={preferences}
												positioning={positioning}
												management={management}
												features={features}
												bindings={localBindings}
												zIndex={uiComponents.length - i || 0}
											/>
										</td>
									);
								}
								const cellOptions = {
									key: `table-${mainId}-row-${i}-cell-${j}`,
									style: { width },
									colSpan: colspan || 1,
									rowSpan: rowspan || 1,
								};
								const interpretedLabel = interpret(features)(bindings)(label);
								return headerCell ? (
									<th {...cellOptions}>{interpretedLabel}</th>
								) : (
									<td {...cellOptions}>{interpretedLabel}</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		);
	} else {
		return null;
	}
};

export default BodyComponent;
