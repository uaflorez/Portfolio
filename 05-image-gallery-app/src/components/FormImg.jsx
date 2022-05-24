import React from 'react'
import PropTypes from 'prop-types'

const FormImg = ({ handleSubmit }) => {
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label className='w-75'>
					{" "}
					Buscar: <input type="text" name='inputText' className="w-100"/> {" "}
				</label>

				<button className='btn btn-warning m-2' type='submit'>
					<span className="material-icons">search</span>
				</button>
			</form>
		</>
	);
};

FormImg.propTypes = {
	handleSubmit: PropTypes.func,
};

export default FormImg