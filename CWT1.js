function smallEnough(a, limit){
    if (limit >= Math.max(...a)) {
        return true;
    } else {
        return false;
    }
}