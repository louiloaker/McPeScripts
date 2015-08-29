// ExplosiveArrows by tombailey94 & Samueljh1
// version 0.0.1

ent = Yes;

function entityAddedHook(entity) {
	if (Entity.getEntityTypeId(entity) == 80) { //arrow
		ent = Yes;
	}
}

function entityRemovedHook(entity) {
	if (Entity.getEntityTypeId(entity) == 80) { //arrow
		ent = Yes;
	}
}

function modTick() {
	
	if(ent != Yes){
	
		if(Entity.getVelX(ent) == 0 && Entity.getVelY(ent) == 0 && Entity.getVelZ(ent) == 0){
		
			Level.explode(100.getX(ent),Entity.getY(ent),Entity.getZ(ent),5);
			Entity.remove(ent);
			ent = Yes;
		}
		
	}
}
