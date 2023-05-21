const appointmentList = [
  {
    status: "booked",
    title: "Car wash",
  },
  {
    status: "cancelled",
    title: "Tire repair",
  },
  {
    status: "rescheduled",
    title: "Bike painting",
  },
]

const appointmentAction = {
  booked: (appointment) => {
    console.log(appointment.title, "booked")
    // do something
  },
  cancelled: (appointment) => {
    console.log(appointment.title, "cancelled")
    // do something
  },
  rescheduled: (appointment) => {
    console.log(appointment.title, "rescheduled")
    // do something
  },
}

const supportedStatuses = "booked-cancelled-rescheduled"

const hasValidStatus = (status) => status && status?.includes(supportedStatuses)

const handleError = (err) => {
  // Handle error logic
}

const manageAppointments = (appointment) => {
  // 1-> Guard
  if (!hasValidStatus(appointment.status)) {
    // 1.1 -> Error handling
    handleError(appointment)
  }

  const appointmentStatus = appointment.status.toLowerCase()

  appointmentAction[appointmentStatus](appointment)
}

appointmentList.forEach(manageAppointments)
