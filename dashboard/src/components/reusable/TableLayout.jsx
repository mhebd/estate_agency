import React from 'react';

function TableLayout({ title, theadList, children }) {
	return (
		<div class='card shadow mb-4'>
			<div class='card-header py-3'>
				<h6 class='m-0 font-weight-bold text-primary'>{title}</h6>
			</div>
			<div class='card-body'>
				<div class='table-responsive'>
					<table
						class='table table-bordered'
						id='dataTable'
						width='100%'
						cellspacing='0'
					>
						<thead>
							<tr>
								{theadList &&
									theadList.map((th) => <th key={Math.random()}>{th}</th>)}
								<th colSpan={2}>Actions</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								{theadList &&
									theadList.map((th) => <th key={Math.random()}>{th}</th>)}
								<th colSpan='2'>Actions</th>
							</tr>
						</tfoot>
						{children}
					</table>
				</div>
			</div>
		</div>
	);
}

export default TableLayout;
