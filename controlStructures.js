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

const hasStatus = (status) => Boolean(status)

const isStatus = (appointment, status) => {
  const statusRegex = new RegExp(status, "i")

  return Boolean(appointment.status.match(statusRegex))
}

const handleError = (err) => {
  // Handle error logic
}

const manageAppointments = (appointment) => {
  // 1-> Guard
  if (!hasStatus(appointment.status)) {
    // 1.1 -> Error handling
    handleError(appointment)
  }

  const appointmentStatus = appointment.status

  appointmentAction[appointmentStatus](appointment)
}

appointmentList.forEach(manageAppointments)
