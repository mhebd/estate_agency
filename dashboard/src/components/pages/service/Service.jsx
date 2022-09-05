import React from 'react';
import Button from '../../reusable/Button';
import PageHeader from '../../reusable/PageHeader';
import TableLayout from '../../reusable/TableLayout';

function Service() {
	return (
		<>
			<PageHeader title='Services' />
			<TableLayout
				title='All Services'
				theadList={['#', 'Name', 'Create Date']}
			>
				<tbody>
					<tr>
						<td>01</td>
						<td>Accountant</td>
						<td>12/3/2022</td>
						<td>
							<Button type='button' className='btn btn-success'>
								Edit
							</Button>
						</td>
						<td>
							<Button type='button' className='btn btn-danger'>
								Delete
							</Button>
						</td>
					</tr>
				</tbody>
			</TableLayout>
		</>
	);
}

export default Service;
