const appointmentAction = {
    booked: (appointment) => {
        // do something
    },
    cancelled: (appointment) => {
        // do something
    },
    rescheduled: (appointment) => {
        // do something
    }
};

const hasStatus = (status) => Boolean(status);

const isStatus = (appointment, status) => {
    const statusRegex = new RegExp(status, "i");

    return Boolean(appointment.status.match(statusRegex));
};

const manageAppointments = (appointment) => {
    // 1-> Guard
    if (!hasStatus(appointment.status)) {
        // 1.1 -> Error handling
        console.error("Error manageAppointments: handle error");
    }

    // 2-> Control Structure
    if (isStatus(appointment, "booked")) {
        appointmentAction.booked(appointment);
        // do something
    }
    if (isStatus(appointment, "cancelled")) {
        appointmentAction.cancelled(appointment);
        // do something
    }
    if (isStatus(appointment, "rescheduled")) {
        appointmentAction.rescheduled(appointment);
        // do something
    }
};