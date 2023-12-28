import React, { useState } from 'react';

const DetailForm = ({ moreOptions }) => {
  const [formData, setFormData] = useState({});
console.log('formData: ', formData)

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData };
    updatedFormData[index] = { ...updatedFormData[index], [name]: value };
    setFormData(updatedFormData);
  };

  const renderFormInputs = () => {
    return moreOptions.map((option, index) => {
      if (option.type === 'string' || option.type === 'number') {
        return (
          <div key={index} className="">
            <label>{option.text}</label>
            <input
              type={option.type}
              name={`input_${index}`}
              placeholder={option.placeholder}
              value={formData[index]?.input}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
        );
      } else if (option.type === 'list' && Array.isArray(option.placeholder)) {
        return (
          <div key={index} className=''>
            <label>{option.text}</label>
            <select
              name={`select_${index}`}
              value={formData[index]?.select}
              onChange={(e) => handleInputChange(e, index)}
            >
              <option value="">Select an option</option>
              {option.placeholder.map((item, itemIndex) => (
                <option key={itemIndex} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <form> 
      {/* {
        moreOptions.map((option, index) => {
            return renderFormInputs((option, index))
        })
        } */}
       { renderFormInputs() }
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default DetailForm;
