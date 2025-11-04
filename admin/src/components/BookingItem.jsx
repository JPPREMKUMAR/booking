
const BookingItem = ({ item }) => {

    const { name, mobile, email, bookingType, vehicle, pickUpPoint, dropPoint, pickUpTime, pickUpDate } = item
    console.log(item)
    const status = true

    return (

        <div className="bg-white shadow-md rounded-md px-4 py-5 flex flex-col gap-y-3 ">
            <p className="text-md font-semibold text-gray-600">Name : <span className="text-gray-900">{name}</span> </p>
            <p className="text-md font-semibold text-gray-600">Mobile : <span className="text-gray-900">{mobile}</span> </p>
            <p className="text-md font-semibold text-gray-600">Email : <span className="text-gray-900">{email}</span> </p>
            <p className="text-md font-semibold text-gray-600">Booking Type : <span className="text-gray-900">{bookingType}</span> </p>
            <p className="text-md font-semibold text-gray-600">Vehicle : <span className="text-gray-900">{vehicle}</span> </p>
            <p className="text-md font-semibold text-gray-600">PickUp Point : <span className="text-gray-900">{pickUpPoint}</span> </p>
            <p className="text-md font-semibold text-gray-600">Drop Point : <span className="text-gray-900">{dropPoint}</span> </p>
            <p className="text-md font-semibold text-gray-600">PickUp Time : <span className="text-gray-900">{pickUpTime}</span> </p>
            <p className="text-md font-semibold text-gray-600">PickUp Date : <span className="text-gray-900">{pickUpDate}</span> </p>
            <p className="text-md font-semibold text-gray-600">Status : <span className={status ? "text-red-600 font-semibold" : "font-semibold text-yellow-600"}>{status ? "Completed" : "Pending"}</span> </p>

        </div>
    )
}


export default BookingItem