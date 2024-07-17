
 function ContentModal() {
    let demoModal
    const showModal = ()=>{
        demoModal.showModal()
    }
    
    return (
        <div>
            <button onclick={()=>showModal()}>open modal</button>
            <dialog ref={demoModal}>
                <h3>this is modal</h3>
                <p>this is a browser native modal</p>
                <p>super fun stuff</p>
            </dialog>

        </div>
    );
}
    export default ContentModal;