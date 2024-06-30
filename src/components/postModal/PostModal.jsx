import { postStructure } from '../../utils'
import './PostModal.css'

export default function PostModal({ handleClose }) {
    // stoped here for today 30.06.2024
    return (
        <>
            <section className='modal-bgc'>
                <dialog className="modal-dialog" open>
                    <h2 className="modal-dialog-title">Add a Post</h2>
                    <form method="dialog" className="modal-dialog-form">
                        {postStructure.map(s => (
                            <>
                                <label key={s.name}>
                                    {s.label}
                                    <input type={s.type} required={s.required} />
                                </label>
                            </>
                        ))}

                        <label>
                            Type
                            <select>
                                <option value="question">Question</option>
                                <option value="answer">Answer</option>
                                <option value="info">Info</option>
                            </select>
                        </label>

                        <button className="modal-dialog-button" onClick={handleClose}>Close</button>
                    </form>
                </dialog>
            </section>


        </>
    )
};


