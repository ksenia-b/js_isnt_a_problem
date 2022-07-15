const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

events = new Set(gameEvents.values());

gameEvent.delete(64);

const time = [...gameEvent.keys()].pop;

for (const [min, event ] of gameEvents){
    const half = min <= 45 ? 'FIRST': 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}