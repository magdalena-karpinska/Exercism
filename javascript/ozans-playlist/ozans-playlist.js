// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const uniqueTrackSet = new Set(playlist);
  const uniqueTrackArray = [...uniqueTrackSet];

  return uniqueTrackArray;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  return playlist.includes(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  if (playlist.includes(track)) {
    return playlist;
  } else {
  const newPlaylist = [...playlist, track];
  return newPlaylist;
  };  
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  if (playlist.includes(track)) {
    const index = playlist.indexOf(track);
    const deletedItem = playlist.splice(index, 1);
    return playlist;
  } else {
    return playlist;
  }
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const uniqueArtists = new Set();

  if (playlist.length > 0) {
    playlist.forEach( track => {
      const artist = track.split(' - ')[1];
      uniqueArtists.add(artist);
    });
    
    const uniqueArtistsArr = [...uniqueArtists];
    return uniqueArtistsArr;
    
  } else {
    return [];
  }
}