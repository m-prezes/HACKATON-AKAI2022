export const getActivityColor = (activity, today) => {
    if ( activity.day < today ){
        if ( activity.done ) {
            return "green-cell";
        } else {
            return "red-cell";
        }
    } else {
        return "gray-cell";
    }
}