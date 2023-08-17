import "../style/dashboard.scss";
import { GrTransaction } from "react-icons/gr";
import { BsCalendarDate } from "react-icons/bs";
import { GiExpense } from "react-icons/gi";
import { BiNotepad } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { BiCategoryAlt } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Toast } from "bootstrap";
import { useState } from "react";




function TransactionForm(props) { 
  const [task, setTask] = useState('')

  function handleClick() {
    props.addTask(task)
    setTask('')
  } 

  function handleTextChange(e){
    setTask(e.target.value)
  }
  
   const formik = useFormik({
    initialValues: {
      date: "",
      type: "",
      category: "",
      amount: "",
      note: "",
    },
    

    validationSchema: Yup.object({
      date: Yup.string().required("Date is required"),
      type: Yup.string().required("Type of Transaction is required"),
      category: Yup.string().required("Category is required"),
      amount: Yup.string().required("Amount is required"),
    }),

    onSubmit: (value) => {
      console.log(value);
      new Toast(document.getElementById('save')).show()
    },

    

  });

  
  return(
    <>
      <div className="container transaction-center row ms-1 mt-5">
        <div className="card-new-trans col-10 col-md-3 rounded">
          <h5
            className="list text-center mt-2 p-2"
            data-bs-toggle="collapse"
            href="#multiCollapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            <GrTransaction size={20} />
            <span className="list-text fw-bold fs-5">Transaction</span>
          </h5>
        </div>
      </div>
      <div className="container-fluid">
        <div className="col-12 col-md-12">
          <div
            className=" collapse multi-collapse ms-2"
            id="multiCollapseExample2"
          >
            <div className="bg-center">
              <div className=" transaction-form col-11 col-md-10  bg-form mt-5">
                <div className="col-11 col-md-11 col-sm-8 mt-4">
                  <form
                    onSubmit={formik.handleSubmit}
                    className="w-100"
                    width="100px">
                    <fieldset>
                      <div className="input-group mt-2" width="100px">
                        <span className="input-group-text" id="date">
                          <BsCalendarDate size={20} />
                          <span className="l1">Date</span>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="date"
                          id="date"
                          value={formik.values.date}
                          onChange={formik.handleChange}/>
                      </div>
                      {formik.errors.date && (
                        <span className="error-text fs-bold">
                          {formik.errors.date}
                        </span>
                      )}

                      
                      <div className="input-group mt-2">
                        <label className="input-group-text" htmlFor="type">
                          <span className="incometext">
                            <GiExpense size={20} />
                            <span className="l1">Type of Transaction</span>
                          </span>
                        </label>
                        <select
                          className="form-select"
                          id="type"
                          value={formik.values.type}
                          onChange={formik.handleChange}
                        >
                          <option defaultValue>Type...</option>
                          <option defaultValue="1" className="color-income">
                          Income
                          </option>
                          <option
                            defaultValue="2"
                            className="color-expense-T"
                          >
                            Expense
                          </option>
                        </select>
                      </div>
                      {formik.errors.type && (
                        <span className="error-text fs-bold">
                          {formik.errors.type}
                        </span>
                      )}


                      <div className="input-group mt-2">
                        <label
                          className="input-group-text"
                          htmlFor="category"
                        >
                          <span className="incometext">
                            <BiCategoryAlt size={20} />{" "}
                            <span className="l1">Category</span>
                          </span>
                        </label>
                        <select
                          className="form-select"
                          id="category"
                          value={formik.values.category}
                          onChange={formik.handleChange}
                        >
                          <option defaultValue>Choose...</option>
                          <option defaultValue="1" className="color-income">
                            Salary
                          </option>
                          <option defaultValue="2" className="color-income">
                            Business
                          </option>
                          <option defaultValue="3" className="color-income">
                            Allowance
                          </option>
                          <option defaultValue="4" className="color-income">
                            Pension
                          </option>
                          <option defaultValue="5" className="color-income">
                            Savings
                          </option>
                          <option defaultValue="6" className="color-expense">
                            Food and Drink
                          </option>
                          <option
                            defaultValue="7"
                            className="color-expense"
                          >
                            Water Bill
                          </option>
                          <option
                            defaultValue="8"
                            className="color-expense"
                          >
                            Electric Bill
                          </option>
                          <option
                            defaultValue="9"
                            className="color-expense"
                          >
                            Rent
                          </option>
                          <option
                            defaultValue="10"
                            className="color-expense"
                          >
                            Transportation
                          </option>
                          <option
                            defaultValue="11"
                            className="color-expense"
                          >
                            Study
                          </option>
                          <option
                            defaultValue="12"
                            className="color-expense"
                          >
                            Beauty
                          </option>
                          <option
                            defaultValue="13"
                            className="color-expense"
                          >
                            Health
                          </option>
                          <option
                            defaultValue="14"
                            className="color-expense"
                          >
                            Entertainment
                          </option>
                          <option
                            defaultValue="15"
                            className="color-expense"
                          >
                            Debt Payments
                          </option>
                          <option
                            defaultValue="16"
                            className="color-expense"
                          >
                            Personal Care
                          </option>
                          <option
                            defaultValue="17"
                            className="color-expense"
                          >
                            Gifts and Donations
                          </option>
                          <option
                            defaultValue="18"
                            className="color-expense"
                          >
                            Insurance
                          </option>
                          <option
                            defaultValue="19"
                            className="color-expense"
                          >
                            Miscellaneous
                          </option>
                          <option
                            defaultValue="20"
                            className="color-expense"
                          >
                            Utilities
                          </option>
                          <option
                            defaultValue="21"
                            className="color-expense"
                          >
                            Pets
                          </option>
                          <option
                            defaultValue="22"
                            className="color-expense"
                          >
                            Subscriptions
                          </option>
                          <option
                            defaultValue="23"
                            className="color-expense"
                          >
                            Home Improvement
                          </option>
                          <option
                            defaultValue="24"
                            className="color-expense"
                          >
                            Vacation and Travel
                          </option>
                          <option
                            defaultValue="25"
                            className="color-expense"
                          >
                            Clothing
                          </option>
                          <option
                            defaultValue="26"
                            className="color-expense"
                          >
                            Electronics and Gadgets
                          </option>
                        </select>
                      </div>
                      {formik.errors.category && (
                        <span className="error-text fs-bold">
                          {formik.errors.category}
                        </span>
                      )}


                      <div className="input-group mt-2">
                        <span className="input-group-text" id="amount">
                          <span className="incometext">
                            <GiWallet size={20} />{" "}
                            <span className="l1">Amount</span>
                          </span>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="amount"
                          id="amount"
                          value={formik.values.amount}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.amount && (
                        <span className="error-text fs-bold">
                          {formik.errors.amount}
                        </span>
                      )}


                      <div className="mt-2">
                        <span htmlFor="note" className="form-label">
                          <span className="incometext">
                            <BiNotepad size={20} />{" "}
                            <span className="l1 note-text-color">Note</span>
                          </span>
                        </span>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Optional"
                          id="note"
                          value={formik.values.note.task}
                          onChange={formik.handleChange}
                        ></textarea>
                      </div>


                      <div className="col-12 save mb-4">
                        <button
                          type="submit"
                          className="col-3 save1 new-trans text-center rounded mt-4"
                          id="save"
                          onClick={handleClick}
                        >
                          <span className="list-text fw-bold fs-5 p-1">
                            Save
                          </span>
                        </button>
                      </div>
                    </fieldset>
                  </form>
                  <div aria-live="polite" aria-atomic="true" className="bg-dark position-relative bd-example-toasts">
                    <div id="save" className="toast-container position-absolute p-3">
                      <div className="toast">
                        <div className="toast-header">
                          <small>11 mins ago</small>
                        </div>
                        <div className="toast-body">
                          Succesfully saved
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TransactionForm;